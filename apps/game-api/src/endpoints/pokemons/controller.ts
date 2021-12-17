import { Context } from 'koa';
import { getBalanceOf } from '../../clients/web3';

export async function create(ctx) {
  ctx.body = {
    data: 'hello create',
  };
}

export async function findAll(ctx: Context) {
  const balance = await getBalanceOf(
    '0xA647E98d78f56075dcc894eD273146D3be1BbE03'
  );
  ctx.body = {
    data: balance,
  };
}
