const electron = require('electron');

const { app } = electron; // 控制应用生命周期模块
const { BrowserWindow } = electron; // 创建原生浏览器窗口模块
// const { ipcMain } = electron;

// 声明变量保存窗口对象，防止被自动垃圾回收
let win;

// 创建窗口函数
function _createWindow() {
    // 创建一个浏览窗口
    win = new BrowserWindow(
        {
            width: 1366, // 窗口宽度
            height: 768 // 窗口高度
        }
    );
    // console.log(__dirname);
    // 加载应用程序的index.html页面
    // win.loadFile(`file://${__dirname}/src/index.html`);
    win.loadFile('./dist/studentManager/index.html');
    // win.loadFile('./src/index.html');

    // 默认打开调试工具
    // win.webContents.openDevTools();

    // 监听窗口关闭事件
    win.on('closed', () => {
        // 在这里可以做一些在关闭窗口是想做的操作
        win = null; // 回收窗口对象
    });
}

// ready事件是当electron初始化完成后，将要创建窗口时触发
app.on('ready', _createWindow);

// 当所有的窗口关闭时触发
app.on('window-all-closed', () => {
    // process.platform为nodejs判断应用程序当前运行的平台
    // http://nodejs.cn/api/process.html#process_process_platform
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

//
app.on('activate', () => {
    // macOS中，点击操作栏图标，如果没有其它窗口打开，会重新创建一个窗口
    if (win == null) {
        _createWindow();
    }
});