# express_treestyle_router

---

For a routes show as followed
```
root
 |--api
    |--doA
        |--doA0
        |--doA1
    |--doB
 |--dir
    |--viewA
    |--viewB
        |--viewB0
```
Instead of 
```
app.get('/',Home_controller.showHome);
app.post('/api/doA',A_controller.doA);
app.post('/api/doA/doA0',A_controller.doA0);
app.post('/api/doA/doA1',A_controller.doA1);
app.post('/api/doB',B_controller.doB);
app.get('/dir/viewA',A_controller.showA);
app.get('/dir/viewB',B_controller.showB);
app.get('/dir/viewB/viewB0',B_controller.showB0);
```
You are able to
```
const router = require('express_treestyle_router')(app);
router.add('/','get',Home_controller.showHome);
const api = router.newDir('api');
    api.add('doA','post',A_controller.doA);
    const doA = api.newDir('doA')
        doA.add('doA0','post',A_controller.doA0);
        doA.add('doA1','post',A_controller.doA1);
    api.add('doB','post',B_controller.doB);
const dir = router.newDir('dir');
    dir.add('viewA','get',A_controller.showA);
    dir.add('viewB','get',B_controller.showB);
    const viewB = dir.newDir('viewB');
        viewB.add('viewB0','get',B_controller.showB0);
```



