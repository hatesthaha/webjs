# webjs
js基类

自用封装layer 弹出层

基本写法

pop.msg('弹出提示')；
pop.confirm('确定退出登录？', function(){
  location.href = "/yudeng/logout.html";
});

pop.alert('请上传图片');
pop.close();关闭

