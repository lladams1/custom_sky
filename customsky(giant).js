module.exports = {
    name: 'Custom Sky Color',
    version: '1.0.0',
    author: 'Giant',
    description: 'Changes the sky color',
    locations: ['game'],
    settings: {
        skyCol: {
            name: 'Custom Sky Color',
            id: 'skyCol',
            cat: 'Gameplay',
            type: 'color',
            val: '#000000',
            needsRestart: true,
            html: () => {
                return `<input type='color' value="${_clientUtil.settings.skyCol.val}" id="${this.id}" onchange="_clientUtil.setCSetting('skyCol', this.value)">`;
            },
            set: (val) => {
                Object.prototype.skyC = val;
            }
        }
    },
    run: config => {
        Reflect.defineProperty(Object.prototype, "skyC", {
            value: config.get('skyCol', '#000000')
        });
    }
};
