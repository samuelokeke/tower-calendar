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

// If you want to use "AppEngine" instead - your server.ts file should contain following:

// import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
// import { getContext } from '@netlify/angular-runtime/context';

// const angularAppEngine = new AngularAppEngine();

// export async function netlifyAppEngineHandler(
//   request: Request
// ): Promise<Response> {
//   const context = getContext();

//   const result = await angularAppEngine.handle(request, context);
//   return result || new Response('Not found', { status: 404 });
// }

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
// export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
