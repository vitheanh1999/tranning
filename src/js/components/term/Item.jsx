import React, { PureComponent } from 'react';
import items from './termContent';
import { ItemTerm, Title, ItemContent } from './itemStyle';


class Item extends PureComponent {
  componentDidMount() {

  }

  render() {
    const item = items.map((itemTerm) => {
      const content = itemTerm.content.map(contentItem => (
        <ItemContent className="list-group-item">
          {contentItem}
        </ItemContent>
      ));
      return (
        <ItemTerm className="list-group-item">
          <Title>{itemTerm.title}</Title>
          <ul className="list-group">
            {content}
          </ul>
        </ItemTerm>
      );
    });

    return (
      <div>{ item }</div>

    );
  }
}
export default Item;
