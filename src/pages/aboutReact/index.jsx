import React from "react";
import Card from "@/components/Card";
import styled from "styled-components";
import fiber_jiegoutu from "@/assets/fiber_jiegoutu.png";
import react_shengmingzhouqi from "@/assets/react_shengmingzhouqi.png";
import Code from "@/components/Code";

const Text = styled.p`
  margin-bottom: 8px;
  white-space: pre-wrap;
`;

function AboutReact() {
  return (
    <>
      <Card title="React 生命周期">
        <img src={react_shengmingzhouqi} style={{ width: 600 }} />
      </Card>

      <Card title="总结 React 处理并发渲染的发展历程">
        <Text>
          {`React 16：
            React 16 之前，react 会采用递归对比虚拟DOM树，找出需要变动的节点，然后同步更新它们，这个过程 react 称为 reconciliation（协调）。
            在reconcilation期间，react 会一直占用浏览器资源，会导致用户触发的事件得不到响应。这种遍历是递归调用，执行栈会越来越深，而且不能中断，中断后就不能恢复了。递归如果非常深，就会十分卡顿。
            引入了 fiber 这种架构后，把渲染/更新过程拆分为一个个小块的任务，通过合理的调度机制来调控时间，指定任务执行的时机，从而降低页面卡顿的概率，提升页面交互体验。通过Fiber架构，让reconcilation过程变得可被中断。适时地让出CPU执行权，可以让浏览器及时地响应用户的交互。
            fiber 的出现，使 render 阶段可以被打断，一旦被打断，这阶段所做的所有事情都被废弃，当 React 处理完紧急的事情回来，依然会重新渲染这个组件，这时候第一阶段的工作会重做一遍。
            所以 fiber 的出现也使得 componentWillMount、componentWillReceiveProps、componentWillUpdate 被标记为不安全，也不再建议在 willMount 中发送请求。
            requestAnimationFrame：在 Fiber 中使用到了requestAnimationFrame，它是浏览器提供的绘制动画的 api 。它要求浏览器在下次重绘之前（即下一帧）调用指定的回调函数更新动画。
            requestIdleCallback：也是 react Fiber 实现的基础 api 。requestIdleCallback能使开发者在主事件循环上执行后台和低优先级的工作，而不影响延迟关键事件，如动画和输入响应。正常帧任务完成后没超过16ms，说明有多余的空闲时间，此时就会执行requestIdleCallback里注册的任务。
          `}
        </Text>
        <Text>
          {`React 17：
            同一个 React 项目可以有多个React实例，为此，React 17 把事件处理机制，绑定到了 React（rootNode）实例的根节点上，而不再是 Html（document）上。
            const rootNode = document.getElementById('root');     ReactDOM.render(<App />, rootNode);
          `}
        </Text>
        <Text>
          {`React 18：
            useDeferredValue：为一个具体的值或状态的处理结果，标记为低优先级，如果这个处理比较耗时，则只会降低该值渲染的优先级，不影响其他部分的渲染；
            useTransition：降低被包裹的函数的优先级，从而优先去处理更高优先级的更新，而不是中断更新等待结果再去渲染页面。
            相比防抖、节流的处理方式更为灵活，只会在处理比较耗时的更新时才会降低优先级，而不是固定间隔时间的等待方式。`}
        </Text>
      </Card>

      <Card title="Fiber">
        <Text>
          {`链表结构设计：
          Fiber结构是使用链表实现的，Fiber tree是个单链表树结构，Fiber 的拆分单位是 fiber（fiber tree上的一个节点），按虚拟DOM节点拆，我们需要根据虚拟dom去生成 Fiber 树。 所有 fiber 节点都通过以下属性：child，sibling 和 return来构成一个 fiber node 的链表。
          React Fiber 首先是将虚拟DOM树转化为Fiber tree，因此每个节点都有child、sibling、return属性，遍历Fiber tree时采用的是后序遍历方法：`}
        </Text>
        <img src={fiber_jiegoutu} style={{ width: 500 }} />
        <br />
        <br />
        <Text>
          {`Fiber执行原理：
          根节点开始渲染和调度的过程可以分为两个阶段：render 阶段、commit 阶段。
          render 阶段：这个阶段是可中断的，会找出所有节点的变更。  此阶段会找出所有节点的变更，如节点新增、删除、属性变更等，这些变更 react 统称为副作用（effect），此阶段会构建一棵 Fiber tree，以虚拟dom节点为维度对任务进行拆分，即一个虚拟dom节点对应一个任务，最后产出的结果是effect list，从中可以知道哪些节点更新、哪些节点增加、哪些节点删除了。
          commit 阶段：这个阶段是不可中断的，会执行所有的变更。    commit 阶段需要将上阶段计算出来的需要处理的副作用一次性执行，此阶段不能暂停，否则会出现UI更新不连续的现象。此阶段需要根据effect list，将所有更新都 commit 到DOM树上。`}
        </Text>
      </Card>

      <Card title="React 18 和之前版本写法上的一些区别">
        <Text>createRoot：</Text>
        <Code
          codeText={`           // React 17
          import ReactDOM from "react-dom";
          const container = document.getElementById("app");
          // 装载
          ReactDOM.render(<App tab="home" />, container);
          // 卸载
          ReactDOM.unmountComponentAtNode(container);

          // React 18
          import { createRoot } from 'react-dom/client';
          const container = document.getElementById('app');
          const root = createRoot(container);
          // 装载
          root.render(<App tab="home" />);
          // 卸载
          root.unmount();`}
        />
        <br />
        <Text>
          {`setState 同步/异步:
            这是 React 此次版本中最大的破坏性更新，并且无法向下兼容。
            React 中的批处理简单来说就是将多个状态更新合并为一次重新渲染，以获得更好的性能。
            在 React 18 之前，React 只能在组件的生命周期函数或者合成事件函数中进行批处理。
            默认情况下，Promise、setTimeout 以及原生事件中是不会对其进行批处理的。
            如果需要保持批处理，则可以用 unstable_batchedUpdates 来实现，但它不是一个正式的 API。`}
        </Text>
        <Code
          codeText={`           // React 18 之前：
            function handleClick() {
              setCount(1);
              setFlag(true);
              // 批处理：会合并为一次 render
            }
            function handleClick() {
              Promise.resolve().then(() => {
                setCount(2);
              });
              setFlag(false);
              // 同步模式：会执行两次 render
              // 并且在 setCount 后，在 setFlag 之前能通过 Ref 获取到最新的 count 值
            }
            
            async function handleClick() {
              await setCount(2);
              setFlag(false);
              // React 18：会执行两次 render
            }`}
        />
        <br />
        <Text>
          {`flushSync:
            官方提供了一个 API flushSync。
            flushSync<R>(fn: () => R): R 它接收一个函数作为参数，并且允许有返回值。
            注意：flushSync 会以函数为作用域，函数内部的多个 setState 仍然为批量更新，这样可以精准控制哪些不需要的批量更新`}
        </Text>
        <Code
          codeText={`          function handleClick() {
            flushSync(() => {
              setCount(3);
              setFlag(true);
            });
            // setCount 和 setFlag 为批量更新，并 render 结束后
            setLoading(false);
            // 此方法会触发两次 render
          }`}
        />
      </Card>
      <Card
        title="react 固定条件的 useState 使用 useReduce 代替"
        desc="一些固定条件的useState（比如每次点击 state + 2），使用 useState 需要 const [num, setNum] = useState(0)，const addTwo = () => setNum(prev => prev +2)，而 useReduce 一行就可搞定"
        codeText="const [num, addTwo] = useReducer((state) => state + 2, 0);"
      />

      <Card
        title="二封组件"
        desc="可以使用 useImperativeHandle/forwardRef/useRef 代替普通的 useState&props 传参，组件部分逻辑可以在组件内完成，也可以减少父组件的代码，使父组件代码看起来更干净利落。"
      />
    </>
  );
}

export default AboutReact;
