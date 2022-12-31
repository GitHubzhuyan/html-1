window.onload = function () {
    /*获取所有的li*/
    let lis = document.querySelectorAll('.main li');
    /*获取所有的bg*/
    let bgs = document.querySelectorAll('.bg');
    /*遍历所有li标签,这里使用的是forEach循环*/
    /*里面的item是lis里面的值,index是下标*/
    /*这里面还有一个箭头函数,箭头函数的作用就是能够让this自动指向的问题*/
    lis.forEach((item,index)=>{
        /*给每个li绑定鼠标悬浮事件*/
        item.onmouseover = () => {
            /*清除所有样式,为了让点击之后的li样式跟随*/
            lis.forEach((el,i) => {
                el.className = '';
                bgs[i].classList.remove('bg-active');
            });
            /*给激活之后的li赋予激活的样式*/
            item.className = 'li-active';
            /*激活背景图片*/
            bgs[index].classList.add('bg-active');
        }
    });
}