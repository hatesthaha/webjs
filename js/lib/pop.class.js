var pop = {
	closeAll: function(callback) {
		layer.closeAll();
		if(typeof callback == 'function') callback();
	},
	prompt: function(title, value, callback) {
		layer.prompt({
				title: title, 
				value: value,
				formType: 0
			}, 
			function(str, index){
				callback && callback(str, index);
  			}
  		);
  		$('.layui-layer-prompt .layui-layer-input').unbind('keyup').keyup(function(event){
  			if (event.keyCode == 13) {
  				$(this).parents('.layui-layer-prompt').find('.layui-layer-btn a').eq(0).click();
  			}
  		});
	},
	dialog: function(opt) {
		var title = opt.title ? opt.title : '信息';
		var btns = opt.btns ? opt.btns : ['确认', '取消'];
		var area = opt.area.length >= 2 ? [opt.area[0] + 'px', opt.area[1] + 'px'] : [opt.area[0] + 'px'];
		var id = opt.id ? opt.id : 'dialog_public_layer';
		layer.confirm(opt.str, {
			id: id,
			title: title,
			area: area,
			btn: btns //按钮
		}, function() { // 确认的操作
			if (typeof opt.callback[0] == 'function') opt.callback[0]();
		}, function() {
			// 取消的操作
			if (typeof opt.callback[1] == 'function') opt.callback[1]();
		});
	},
	openDialog: function(opt) {
		var title = opt.title ? opt.title : '信息';
		var btns = opt.btns ? opt.btns : ['确认', '取消'];
		var area = opt.area.length >= 2 ? [opt.area[0] + 'px', opt.area[1] + 'px'] : [opt.area[0] + 'px'];
		var id = opt.id ? opt.id : 'dialog_public_layer';
		layer.open({
			type: 1,
			title: title,
			content: opt.contents,
			area: area,
			btn: btns,
			yes: function() {
				if (typeof opt.callback == 'function') opt.callback();
			}
		});
	},
	diyPage: function(opt) {
		var cfg = {
			'title': '信息',
			'id': 'layer_diy_page',
			'area': ['auto', 'auto']
		};
		opt = $.extend(cfg, opt);
		layer.open({
			id: opt.id,
			type: 1,
			skin: 'layui-layer-demo', //样式类名
			closeBtn: 1, //不显示关闭按钮
			shift: 2,
			shadeClose: true, //开启遮罩关闭
			title: opt.title,
			content: opt.html,
			area: opt.area
		});
	},
	alert: function(str, callback) {
		layer.open({
			content: str,
			btn: ['确定'],
			end: function() {
				if (typeof callback == 'function') callback();
			}
		});
	},
	msg: function(str, callback, seconds) {
		if (!seconds) seconds = 1;
		layer.msg(str, {
			time: seconds * 1000,
			end: function() {
				if (typeof callback == 'function') callback();
			}
		});
	},
	confirm: function(str, callback) {
		layer.confirm(str, {
			icon: 3,
			title: '提示',
			btn: ['确认', '取消'] //按钮
		}, function() { // 确认的操作
			if (typeof callback == 'function') callback();
		}, function() {});
	}
};

