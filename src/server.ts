// Error: server.ts doesn't seem to be Netlify compatible and is not known default. Please replace it with Netlify compatible server.ts.

// It seems like you use "CommonEngine" - for this case your server.ts file should contain following:

import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine';

const commonEngine = new CommonEngine();

export async function netlifyCommonEngineHandler(
  request: Request,
  context: any
): Promise<Response> {
  return await render(commonEngine);
}
