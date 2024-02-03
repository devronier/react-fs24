import { Card } from "antd";
const { Meta } = Card;
const App = () => (
  <Card
    hoverable
    cover={<img alt="example" src="https://ronierlima.dev/assets/avatar.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
export default App;
