import React from "react";
import Card from "@/components/Card";

const contentList = [
  {
    title: "数组转对象",
    desc: `一些场景下只知一些关键数据的集合（比如表格勾选，selectedKeys之记录了每条数据的id），而提交时需要每条id下的其他字段，直接用selectedKeys遍历数组数据不太好，可以将数组数据先转换成对象
    Array.reduce 方法非常强大，可以解决大部分数组问题，也有很多的妙用，比如求一个数组的平均值 const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;`,
    codeText:
      'const arrayToHash = (dataSource, PK = "id") => dataSource.reduce((obj, item) => ((obj[item[PK]] = item), obj), {});',
  },
  {
    title: "react 固定条件的 useState 使用 useReduce 代替",
    desc: "一些固定条件的useState（比如每次点击 state + 2），使用 useState 需要 const [num, setNum] = useState(0)，const addTwo = () => setNum(prev => prev +2)，而 useReduce 一行就可搞定",
    codeText: "const [num, addTwo] = useReducer((state) => state + 2, 0);",
  },
  {
    title: "获取数据的类型",
    desc: `判断数据类型有很多方式，但各有利弊：
      typeof 是最简单的方式，但是有些类型的判断会有误差;
      instanceof 只能判断对象类型的数据;
      Object.prototype.toString.call('xxx') 应该是最优解，但是相对的编写麻烦，代码有些长;
      可以编写一个common方法，相对优雅的获取数据的类型。`,
    codeText:
      "const getType = (data) => Object.prototype.toString.call(data).slice(8, -1).toLocaleLowerCase();",
  },
  {
    title: "复制到剪切板",
    desc: "常用于事件函数复制文本到剪切板，之后 command(window 下 ctrl 键) + C 或鼠标右键粘贴出来该文本",
    codeText:
      "const handleCopy = text => navigator.clipboard?.writeText && navigator.clipboard.writeText(text);",
  },
  {
    title: "移动到滚动条顶部或底部",
    desc: "常用于事件操作让页面移动到顶部或底部，优化用户体验，smooth 使页面可以平滑滚动",
    codeText: `const handleScrollToTop = element => (element || document.documentElement).scrollIntoView({ behavior: "smooth", block: "start" });\nconst handleScrollToBottom = element => (element || document.documentElement).scrollIntoView({ behavior: "smooth", block: "end" });`,
  },
  {
    title: "数组去重",
    desc: "利用 es6 新出的 Set 方法，可以快速去重",
    codeText:
      "const quchong = arr => Array.isArray(arr) ? [...new Set(arr)] : arr;",
  },
  {
    title: "获取数组的交集",
    desc: "常用于多组数据（或面试 -_- ）进行一些交集数据的处理，此函数可用于两组或更多组数据的交集获取",
    codeText:
      "const jiaoji = (arr, ...otherArr) => [...new Set(arr)].filter(value => otherArr.every(itemArr => itemArr.includes(value)));",
  },
  {
    title: "千分位分隔符",
    desc: "用于处理金额的展示，让用户可以更好的读出金额，提升用户体验。 tip：这里展示保留两位小数切不四舍五入",
    codeText: "const addThousandthSign = numStr => numStr.toFixed(3).replace(/(\\d)(?=(\\d{3})+\\.)/g, '$1,').slice(0, -1)"
  },
];

function OneLineOfCode() {
  return (
    <>
      {contentList.map((item, ind) => (
        <Card
          {...item}
          key={item.title}
          style={ind === contentList.length - 1 ? { marginBottom: 0 } : {}}
          title={`${ind + 1}、${item.title}`}
        />
      ))}
    </>
  );
}

export default OneLineOfCode;
