/*!
 * product
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/06/29
 * since: 0.0.1
 */
'use strict';

const faker = require('faker/locale/zh_CN');

let items = [];
for(let i = 0, len = 100; i < len; i++) {
	items.push({
		id: i + 1,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
	});
}

module.exports = items;
