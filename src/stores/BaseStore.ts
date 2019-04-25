class BaseStore {
    static storeName: string;

    constructor(name: string) {
        BaseStore.storeName = name;
    }
};

export default BaseStore;