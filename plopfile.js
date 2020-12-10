// @ts-check
module.exports = plop => {
    plop.setHelper('upperCase', (txt) => txt.toUpperCase());

    plop.setGenerator('component', {
        description: '创建一个组件',
        prompts: [
            {
                type:'input',
                name:'name',
                message:'组件的名称',
                default:'my-component'
            }
        ],
        actions: [{
            type: 'add',
			path: 'packages/{{name}}/index.js',
			templateFile: 'plop-templates/index.hbs'
        },{
            type: 'add',
			path: 'packages/{{name}}/package.json',
			templateFile: 'plop-templates/package.hbs'
        },{
            type: 'add',
			path: 'packages/{{name}}/src/{{properCase name}}.vue',
			templateFile: 'plop-templates/src/Component.hbs'
        },{
            type: 'add',
			path: 'packages/{{name}}/__tests__/{{name}}.test.js',
			templateFile: 'plop-templates/__tests__/component.test.hbs'
        },{
            type: 'add',
			path: 'packages/{{name}}/stories/{{name}}.stories.js',
			templateFile: 'plop-templates/stories/component.stories.hbs'
        },{
            type: 'add',
			path: 'packages/{{name}}/LICENSE',
			templateFile: 'plop-templates/LICENSE.hbs'
        },{
            type: 'add',
			path: 'packages/{{name}}/README.md',
			templateFile: 'plop-templates/README.hbs'
        }]
    })
}