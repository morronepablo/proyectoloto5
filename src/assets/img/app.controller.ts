import {
    ApiResponse,
    Context,
    controller,
    Get,
    HttpResponseOK,
    HttpResponseRedirect,
    HttpResponse,
    HttpResponseBadRequest,
    ValidationError,
    HttpResponseInternalServerError,
} from '@foal/core';
import { ServerError, InternalError, ErrorCodeToHttpResponse } from './utility/errors';
import { ApiController, OpenApiController } from './controllers';
import { LogHttpRequest } from './hooks/httplog';

export class AppController {
    subControllers = [controller('/api', ApiController), controller('/swagger', OpenApiController)];

    @LogHttpRequest()
    @Get('/')
    index(ctx: Context) {
        return new HttpResponseOK('hello');
    }

    async handleError(error: Error, ctx: Context): Promise<HttpResponse> {
        let errorString: string | null = null;
        if (error instanceof ServerError) {
            if (error instanceof InternalError) {
                errorString = error.toString();
                console.log(errorString);
            }
            return ErrorCodeToHttpResponse((error as ServerError).code);
        }
        if (error instanceof Error) {
            errorString = 'Internal error: ' + (error as Error).stack;
            console.log(errorString);
        } else {
            errorString = 'Internal error: ' + (error as any).toString();
            console.log(errorString);
        }
        return new HttpResponseInternalServerError();
    }
}
