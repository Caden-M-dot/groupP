import { Selector } from "testcafe";

fixture('GetAllTests')
.page('http://localhost:3000')

test('MyTest', async t => {
  const b = Selector('#getAllItemsForm').find('button')
  await t.click(b)
  const res = await t.request('http://localhost:3000');
  await t.expect(res.status).eql(200);
  if(res.status =200) {
    console.log('mcra0146@algonquinlive.com - MyTest - Passed')
  }
  else console.log('mcra0146@algonquinlive.com - MyTest - Failed')
});