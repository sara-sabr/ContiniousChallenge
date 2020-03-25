import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ApiProduces, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

@Controller('/version')
export class VersionController {
  @Get()
  @ApiOperation({
    summary: 'API Version',
    description: 'Returns the currernt version of the API'
  })
  @ApiProduces('application/json')
  @ApiOkResponse({description: 'Version response on OK'})
  version(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      kind: "version",
      version: 1
    });
  }
}