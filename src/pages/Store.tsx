import items from '../data/items.json';
import {Row, Col} from 'react-bootstrap';

export function Store() {

    return (
        <div>
          <h1>Store</h1>

          <Row md={2} xs={1} lg={3} className="g-3">
            {items.map((item) => (
              <Col>{JSON.stringify(item)}</Col>
            ))}
          </Row>



        </div>
    )
  }
  
  