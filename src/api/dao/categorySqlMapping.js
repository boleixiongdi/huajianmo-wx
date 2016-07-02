/**
 * Created by leijiwen on 11/22/15.
 */

var category = {
    insert:'insert into category(id, name, status, parentId, priority) VALUES(0,?,?,?,?)',
    update:'update category set name=?, status=?, parentId=?, priority=? where id=?',
    delete: 'delete from category where id=?',
    queryById: 'select * from category where id=?',
    queryAll: 'select * from category'
};

module.exports = category;
