
import doT from "../template/doT.js";

(function (document, window, $) {
    $(function () {

        let test_vm = new MVVM({
            el : '#test-app',
            data : {
                show : true,
                word : '默认值',
                class : 'name-color',
                htmlString : '暂无数据',
                text : 0,
                num : 0,
                json : {
                    name : '',
                    sex : '男',
                    age : '18'
                },
                isName : false,
                jsHtmlJson : '<span>无内容</span>'
            },
            computed : {
                add : function(){
                    let _num = this.text * this.num;
                    return _num;
                }
            },
            methods : {
                showClick : function() {
                    this.show = !this.show;
                },
                classClick : function(){
                    this.class = 'name-color-small'
                },
                htmlClick : function(){
                    this.htmlString = '<span style="color: #f00;">数据加载成功,展示加载内容</span>'
                },
                jsClick : function(){
                    let dataInter = {"name":"丁平","age":18};
                    let interText = doT.template($("#interpolationtmpl").text());
                    this.jsHtmlJson = interText(dataInter);
                }
            }
        });
        test_vm.$watch('json.name',(newValue,oldVale)=>{
            if(newValue == '丁平'){
                console.log('????????');
                console.log(test_vm.json);
                test_vm.isName = true;
            }
        })
      
    });

})(document, window, jQuery);