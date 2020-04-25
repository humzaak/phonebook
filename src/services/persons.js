import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
  //  return request.then(response => response.data)

    const nonExisting = {
        id: 10000,
        name: 'This note is not saved to server',
        number: '2019-05-30T17:30:31.098Z',
      }
    return request.then(response => response.data.concat(nonExisting))
}

const create = newObject => {
    const request =  axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)

}

const deleteData = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response =>response.data)
}

export default 
{
    getAll: getAll,
    create: create,
    update: update,
    deleteData: deleteData
}
