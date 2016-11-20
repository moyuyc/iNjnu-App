/**
 * Created by Moyu on 16/11/18.
 */
var conn = require('./base');
var format = conn.format;
var sFilter = conn.likeStrFilter;

var table = 'discusses';


module.exports = {
    add(title, sender, datetime, content) {
        return new Promise((resolve, reject) => {
            conn.query('insert into ?? values (NULL,?,?,?,?)', [table, title, sender, datetime, content],
                (err, rlt) => {
                    if(err) {console.error(err); reject(err)}
                    else resolve(rlt.affectedRows>0);
                }
            )
        })
    },
    check(id) {
        return this.get(id).then(r=>!!r)
    },
    get(id) {
        return new Promise((resolve, reject) => {
            conn.query('select * from ?? where id=?', [table, id],
                (err, rlt) => {
                    if(err) {console.error(err); reject(err)}
                    else resolve(rlt.length===0 ? null: rlt.length===1 ? rlt[0]: rlt);
                }
            )
        })
    },
    list(page, size, previd) {
        page--;
        size = +size;
        return new Promise((resolve, reject) => {
            conn.query(
                `select * from ?? ${previd!=null?'where datetime<(select datetime from ?? where id=?) ':''}order by datetime desc limit ?,?`,
                previd!=null?[table, table, +previd, 0, size]:[table, page*size, size],
                (err, rlt) => {
                    if(err) {console.error(err); reject(err)}
                    else resolve(rlt.length===0 ? null: rlt);
                }
            )
        })
    }
}