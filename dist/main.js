"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const PORT = process.env.PORT || 3000;
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map