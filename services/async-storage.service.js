export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    save
}
//entityType = local storage key

function query(entityType, delay = 500) { // load from storage
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return new Promise(resolve => setTimeout(() => resolve(entities), delay))
}

function get(entityType, entityId) { // Searching an Id's from array
    return query(entityType).then(entities => {
        const entity = entities.find(entity => entity.id === entityId)
        if (!entity) throw new Error(`Get failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        return entity
    })
}

function post(entityType, newEntity) { // Taking the last entityType and reSave it with id
    newEntity = {...newEntity}
    newEntity.id = _makeId()
    return query(entityType).then(entities => {
        entities.push(newEntity)
        save(entityType, entities)
        return newEntity
    })
}

function put(entityType, updatedEntity) { // update Entity from id's 
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity.id === updatedEntity.id)
        if (idx < 0) throw new Error(`Update failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        entities.splice(idx, 1, updatedEntity)
        save(entityType, entities)
        return updatedEntity
    })
}

function remove(entityType, entityId) { // removing entityId from localStorage
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity.id === entityId)
        if (idx < 0) throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        entities.splice(idx, 1)
        save(entityType, entities)
    })
}

// Private functions

function save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}