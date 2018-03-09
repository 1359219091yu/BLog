const express=require('express');
const router=express.Router();
const category=require('../controllers/category');

/**
 * 分类列表
 */
router.get('/',category.index);
/**
 * 分类详情
 */
router.get('/:id',category.get);
/**
 * 分类保存
 */
router.post('/save',category.save);

/**
 * 更新分类
 */
router.post('/update/:id',category.update);
/**
 * 删除分类
 */
router.post('/delete/:id',category.delete);
/**
 * 设置导航显示
 */
router.get('/set-nav/:id',category.setNav);
module.exports=router;