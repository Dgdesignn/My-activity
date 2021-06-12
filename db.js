const sql = require('sqlite3').verbose()
const db = new sql.Database('./ideas.db')

db.serialize(function(){

    //Criar tabela
   /* db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        )

    `)*/

    //inserir dado na tabela
    const query = `
    INSERT INTO ideas ( 
        image, 
        title, 
        category, 
        description,
        link
        ) vALUES (?,?,?,?,?)
    `

    const values = [
        "./images/videogames.svg",
        "God Of War",
        "Video Game",
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        "#"
    ]
    /*
    db.run(query, values, function(err){
       if(err) return console.log(err)

        console.log(this)
    })*/


    //Consultar dado na tabela
    /*db.all(`SELECT id, title, category FROM ideas`, function(err, rows) {
        if (err) return console.log(err)

        console.log(rows)
    })*/

    //deletar dado na tabela
    const del = `DELETE  FROM ideas WHERE id = ?`;
    //db.run(del, [1], function(err){
    //    if (err) return console.log(err);
     //   console.log('Deletei '+this)
    //})

    //EDITAR DADOS DA TABELA
    /*const update = `UPDATE ideas SET title = ? WHERE id = ?`;
    db.run(update,['Krato',2], function(err){
        if (err) return console.log(err);
        console.log('Update feito com sucesso')
    })*/
})


module.exports = db;