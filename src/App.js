import './App.css';
import PricingComponent from './component/PricingComponent';

function App() {
  return (
    <div className="app">
      {/* background div with curve at bottom left */}
      <div className="app__background">
        <div className="app__background__circleone"></div>
        <div className="app__background__circletwo"></div>
      </div>

      <div className="app__header">
        <h1 >Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </div>

      <PricingComponent/>


    </div>
  );
}

export default App;
