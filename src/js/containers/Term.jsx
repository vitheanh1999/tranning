import React, { PureComponent } from 'react';
import Item from '../components/term/Item';
import { TermMain } from '../components/term/itemStyle';


class Term extends PureComponent {
  componentDidMount() {

  }

  render() {
    return (
      <TermMain>
        <div className="term-content p-4">
          <h3 className="text-center p-4">利用規約</h3>
          <p>本利用規約（以下「本規約」と言います。）には、本サービスの提供条件及び当社と登録ユーザーの皆様との間の権利義務関係が定められています。本サービスの利用に際しては、
          本規約の全文をお読みいただいたうえで、本規約に同意いただく必要があります。
          </p>
          <ul className="list-group container">
            <Item />
          </ul>
        </div>
      </TermMain>
    );
  }
}
export default Term;
