//

const express = require('express')
const app = express()
app.listen(8000)
//创建数据库连接对象
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: '127.0.0.1',//数据库地址
    port: '8889',
    user: 'root',//账号
    password: 'root',//密码
    database: 'zjk',//库名
    multipleStatements: true //允许执行多条语句
})

app.get('/', (req, res) => res.send('sdfsdf'))

app.get('/api/add', (req, res) => {
    const sqlStr = 'select * from user '
    conn.query(sqlStr, (err, results) => {

        if (err) return res.json({ err_code: 1, message: '资料不存在', affextedRows: 0 })

        res.json({ err_code: 200, message: results, affextedRows: results.affextedRows })
    })
})
//
app.post('/login', (req, res) => {
    
})


app.listen(3000, () => console.log('Example app listening on port 8000!'))
