'use strict'

module.exports = function(_app){
	return {
		app:_app,
		base: "",

		fileterPath:function(path){
			if (path.charAt(0)!=='/')
				path = '/' + path;
			if (path.charAt(path.length-1)=='/')
				path = path.slice(0,-1);
			return path;
		},
		add:function(path,method,handler){
			path = this.fileterPath(path);
			this.app[method](this.base+path,handler);
		},

		newDir:function(path){
			path = this.fileterPath(path);
			let out =  Object.assign({}, this);
			out.base += path;
			return out;
		},

		showPath:function(){
			return this.base;
		}
	}
}

