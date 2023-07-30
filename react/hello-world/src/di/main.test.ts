import { doPrint } from "./implement";
import { main } from "./main";


test('依存性逆転への道', () => {
    main(doPrint);
})