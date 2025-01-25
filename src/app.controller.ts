import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index.hbs')
  root() {
    return {
      Template: 'Template: App/Views/index.hbs',
      Controller: 'Controller: App/Src/app.controller.ts',
      Style: 'Style: App/Public/main.css',
    };
  }
}
