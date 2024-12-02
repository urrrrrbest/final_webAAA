//模拟弹窗（微信）
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }

//点击下拉菜单（language）
document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
  
dropdownButton.addEventListener("click", () => {
    const isMenuVisible = dropdownMenu.style.display === "block";
dropdownMenu.style.display = isMenuVisible ? "none" : "block";
    });
  
    // 点击页面其他地方时关闭菜单
document.addEventListener("click", (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = "none";
    }
});
});



//微信二维码
// 获取微信图标、弹窗、关闭按钮的DOM元素
const wechatIcon = document.getElementById('wechat-icon');
const popup = document.getElementById('overlay');
const closeBtn = document.getElementById('close-popup');

// 点击微信图标时显示弹窗
wechatIcon.addEventListener('click', function() {
    popup.style.display = 'block'; // 显示弹窗，并激活flex布局
});

// 点击关闭按钮时隐藏弹窗
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none'; // 隐藏弹窗
});

// 点击遮罩层时也隐藏弹窗
popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

        
/*需求：当页面滚动大于300像素，就显示回到顶部按钮
    */
    // 获取回到顶部元素
    const backTop = document.querySelector('#backTop')
    // L2 事件监听
    // 给页面添加 滚动事件
    window.addEventListener('scroll', function () {
      // 检测页面滚动的头部距离属性
      const n = document.documentElement.scrollTop
      backTop.style.opacity = n >= 300 ? 1 : 0
    })
    // 需求：点击返回按钮，页面会返回顶部
    // 给回到顶部元素添加 点击事件
    backTop.addEventListener('click',function () {
      document.documentElement.scrollTop = 0
    })
