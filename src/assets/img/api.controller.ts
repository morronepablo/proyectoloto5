/* eslint-disable arrow-parens */
import {
    ApiInfo,
    ApiResponse,
    ApiServer,
    Config,
    Context,
    controller,
    Get,
    Hook,
    HttpResponseRedirect,
} from '@foal/core';
import { UserController } from './user.controller';
import { InfoController } from './info.controller';
import { WalletController } from './wallet.controller';
import { ApuestasController } from './apuestas.controller';
import { DebugController } from './debug.controller';
import { EasyConfig } from '../common';
import { PluspagosController } from './pluspagos.controller';
import { Pagos360Controller } from './pagos360.controller';
import { DepositController } from './deposit.controller';
import { TotalCoinController } from './totalcoin.controller';


class NullController {}

@ApiInfo({
    title: 'A modest API',
    version: '0.0.1',
})
@ApiServer({
    url: '/api',
})
@Hook(() => (response) => {
    // Every response of this controller and its sub-controllers will be added this header.
    response.setHeader('Access-Control-Allow-Origin', '*');
})
export class ApiController {
    private static unsafe =
        Config.get<boolean>('settings.unsafe_endpoints') && EasyConfig.settingsDebug;
    subControllers = [
        controller('/info', InfoController),
        controller('/user', UserController),
        controller('/wallet', WalletController),
        controller('/bets', ApuestasController),
        controller('/debug', ApiController.unsafe ? DebugController : NullController),
        controller('/pluspagos', PluspagosController),
        controller('/pagos360', Pagos360Controller),
        controller('/deposit', DepositController),
		controller('/totalcoin', TotalCoinController)

    ];

    @Get('/')
    @ApiResponse(302, { description: 'redirect to swagger' })
    index(ctx: Context) {
        return new HttpResponseRedirect('/swagger');
    }
}
