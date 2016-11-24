import Ember from 'ember';
import computed, { on } from 'ember-computed-decorators';

export default Ember.Component.extend({
	tagName: 'div',
    classNames: ['my-radios'],
	content: [],
	value: '',
	name: '',
	inputName: '',

    @on('init')
    domInserted() {
        let str = this.randomString(5);
        if(!this.get('inputName')){
            this.set('inputName', str);
        }
    },

	@computed('value')
	listenValue(){
		let value = this.get('value');
		console.log(value);
	},

    didInsertElement() {
        // var _this = this;
        // $('.my-radios').on('click', 'label', function(){
        //     var $tar = $(this).find('input');
        //     var index = $(this).index();
        //     console.log(index);
        // });
    },

    actions: {
        select(index) {
            let value = this.get('content')[index].val,
                name = this.get('content')[index].name;
            this.set('value', value);
            this.set('name', name);
        }
    },

    // 生成随机字符串
	randomString(len) {　　
		len = len || 32;　　
        /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
		var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
		var maxPos = $chars.length;　　
		var pwd = '';　　
		for (var i = 0; i < len; i++) {　　　　
			pwd += $chars.charAt(Math.floor(Math.random() * maxPos));　　
		}　　
		return pwd;
	}
});
