var http = {
	ajaxFormData: function(url, data, callback, cross, showError) {
		globalObj.ajax(url, data, callback, 'POST', true, cross, showError);
	},
	ajaxGet: function(url, data, callback, cross, showError) {
		globalObj.ajax(url, data, callback, 'GET', false, cross, showError);
	},
	ajaxPost: function(url, data, callback, cross, showError) {
		globalObj.ajax(url, data, callback, 'POST', false, cross, showError);
	},
	ajax: function(url, data, callback, method, multi, cross, showError) {
		if (!method) {
			method = 'POST';
		}
		if (!multi) { // 默认普通方式POST数据
			multi = false;
		}
		if (undefined === showError) { // 默认显示错误
			showError = true;
		}
		var option = {
			type: method,
			url: url,
			dataType: 'json',
			data: data
		};
		if (cross) { // 跨域时使用
			option.crossDomain = true;
			option.xhrFields = {
				withCredentials: true
			};
		}
		if (multi) { // POST文件时使用
			option.processData = false;
			option.contentType = false;
		}
		option.success = function(res) {
			if (res.code != 0 && showError) {
				globalObj.errorCallback(res, callback);
			} else {
				if (typeof callback == 'function') callback(res);
			}
		};
		option.error = function(XMLHttpRequest, textStatus, errorThrown) {
			pop.msg('网络故障');
		};
		$.ajax(option);
	},
	errorCallback: function(res, callback) {
		if (res.code == 0) return;
		pop.msg(res.msg, function() {
			if (typeof callback == 'function') callback(res);
		});
	}
};