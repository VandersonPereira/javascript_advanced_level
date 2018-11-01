let db;

function getObjectStore(){
    return db.transaction(["Courses"], "readwrite").objectStore("Courses");
}

const DB = {
    start(){
        return new Promise(resolve => {
            let request = indexedDB.open('Estudo', 1);
            
            request.onsuccess = (event) => {
                db = request.result;
                resolve(this);
            }

            request.onupgradeneeded = (event) => {
                db = event.target.result;
                db.createObjectStore('Courses', { keyPath: "id" });
            }

            alert('Banco de dados criado!');
        });
    },

    find(id){
        return new Promise(resolve => {
            let request = getObjectStore().get(id);
            request.onsuccess = () => {
                resolve(request.result)
            }
        });
        // usando a função:
        // DB.find(passando um id)
        // .then(result => console.log(result));
    },

    findAll(){
        return new Promise(resolve => {
            let request = getObjectStore().getAll();
            request.onsuccess = () => {
                resolve(request.result)
            }
        });

        // usando a função:
        // DB.findAll()
        // .then(result => console.log(result));
    },

    insert(item){
        return new Promise(resolve => {
            let request = getObjectStore().add(item, (new Date()).getTime());
            request.onsuccess = () => {
                resolve(item);
            }
        });

        // usando a função:
        // DB.insert({'Name':'Javascript Básico'})
        // .then(result => console.log(result));
    },

    update(item, id){
        return new Promise(resolve => {
            let request = getObjectStore().put(item, id);
            request.onsuccess = () => {
                resolve(item);
            }
        });

        // usando a função:
        // DB.update(passando um item modificado, passando id)
        // .then(result => console.log(result));
    },

    remove(id){
        return new Promise(resolve => {
            let request = getObjectStore().delete(id);
            request.onsuccess = () => {
                resolve(id);
            }
        });

         // usando a função:
        // DB.remove(passando id)
        // .then(result => console.log(result));
    }
}

DB.start();