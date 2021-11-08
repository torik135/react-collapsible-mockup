// components
import Collapsible from "./components/Collapsible"

const App = () => {

  return (
    <div>
      <Collapsible label="BTN 1">
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam sit distinctio odit libero. Id odit expedita enim temporibus ad consectetur aspernatur libero sunt illo maxime inventore sint voluptates, sapiente porro.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam sit distinctio odit libero. Id odit expedita enim temporibus ad consectetur aspernatur libero sunt illo maxime inventore sint voluptates, sapiente porro.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam sit distinctio odit libero. Id odit expedita enim temporibus ad consectetur aspernatur libero sunt illo maxime inventore sint voluptates, sapiente porro.</p>
      </Collapsible>
      <Collapsible label="BTN 2">
        <ul>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
        </ul>
      </Collapsible>
      <Collapsible label="BTN 3">
        <input type="text" />
      </Collapsible>
      <Collapsible label="BTN 4">
        <input type="radio" />
      </Collapsible>
    </div>
  )
}

export default App
