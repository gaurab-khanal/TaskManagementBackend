const db = require("../config/db");

class Task{
    constructor(title, status){
        this.title = title;
        this.status = status;
    }

     save(){
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        let createdAtDate = `${year}-${month}-${day}`;

        let sql = `

        INSERT INTO tasks(
            title,
            status,
            created_at
        )
        VALUES(
            '${this.title}',
            '${this.status}',
            '${createdAtDate}'
        )

        `;
        return db.execute(sql);

    }

    static findAll(){
        let sql = "SELECT * FROM tasks;";

        return db.execute(sql);
    }

    static findById(id){

        try {
            
        let sql = `SELECT * FROM tasks WHERE id = ${id};`;

        return db.execute(sql);
        } catch (error) {
            console.log(error);
        }
    }

    static findByStatus(status){

        try {
            
        let sql = `SELECT * FROM tasks WHERE status = '${status}';`;

        return db.execute(sql);
        } catch (error) {
            console.log(error);
        }
    }

    static deleteById(id) {
        try {

            let sql = `DELETE FROM tasks WHERE id = ${id};`;

            return db.execute(sql);
        } catch (error) {
            console.log(error);
        }
    }

    static updateById(id, title, status) {
        try {
            let sql = `
                UPDATE tasks
                SET title = '${title}', status = '${status}'
                WHERE id = ${id};
            `;
            
            return db.execute(sql);
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = Task;