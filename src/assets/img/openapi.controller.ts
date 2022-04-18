import { Context, dependency, Get, HttpResponseOK, OpenAPI } from '@foal/core';
import { ApiController } from './api.controller';
import { SwaggerController } from '@foal/swagger';

export class OpenApiController extends SwaggerController {
    options = { controllerClass: ApiController };
    uiOptions = { docExpansion: 'full' };

    @dependency
    openapi: OpenAPI;
    @Get('/openapi.json')
    readDocument() {
        return new HttpResponseOK(this.openapi.createDocument(ApiController));
    }
}
