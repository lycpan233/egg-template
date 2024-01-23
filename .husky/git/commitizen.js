// .cz-config.js
module.exports = {
    // type 类型
    types: [
        { value: 'feat', name: 'feat:     新增一个特性' },
        { value: 'fix', name: 'fix:      修复 bug' },
        { value: 'docs', name: 'docs:     添加/更新文档' },
        { value: 'style', name: 'style:    改变但不影响代码的意思（如：空格、格式化、分号缺失、冲突解决等等）' },
        { value: 'refactor', name: 'refactor: 重构，即非BUG修复也非新增特性的代码改变' },
        { value: 'perf', name: 'perf:     提升性能的代码改变（和重构有点重合）' },
        { value: 'test', name: 'test:     增加新测试代码或校正已有测试代码' },
        { value: 'build', name: 'build:  影响构建系统或外部依赖的代码（如：gulp, broccoli, npm）' },
        { value: 'ci', name: 'ci:      修改 CI 配置文件如（如：Travis, Circle, BrowserStack, SauceLabs）' },
        { value: 'chore', name: 'chore:   其他，非源码或测试代码的修改' },
        { value: 'revert', name: 'revert:      撤消之前的提交' }
    ],

    // allowTicketNumber: false,
    // isTicketNumberRequired: false,git
    // ticketNumberPrefix: 'TICKET-',
    // ticketNumberRegExp: '\\d{1,5}',

    // scope 类型，影响 commit 的影响范围
    // scopes: [
    //     { name: "commitizen" },
    //     { name: "git" },
    //     { name: "scripts" },
    //     { name: "components" },
    //     { name: "tutorial" },
    //     { name: "catalog" },
    //     { name: "product" }
    // ],

    // 可以设置 scope 的类型跟 type 的类型匹配项，例如: 'fix'
    // scopeOverrides: {
    //     config: [
    //         { name: 'merge' },
    //         { name: 'style' },
    //         { name: 'e2eTest' },
    //         { name: 'unitTest' }
    //     ]
    // },

    // 覆写提示的信息
    messages: {
        type: "选择你要提交的类型:",
        scope: '选择一个 scope (可选):',
        // 选择 scope: custom 时会出下面的提示
        customScope: '请输入自定义的 scope (可选):',
        subject: '填写一个简短精炼的描述语句 (必填):\n',
        body: '添加一个更加详细的描述，可以附上新增功能的描述或 bug 链接、截图链接 (可选)。使用 "|" 换行:\n',
        breaking: '列举非兼容性重大的变更 (可选):\n',
        footer: '列举出所有变更的 ISSUES CLOSED (可选)。 例如.: #31, #34:\n',
        confirmCommit: '确认提交?（y/n）',
    },

    // 是否允许自定义填写 scope ，设置为 true ，会自动添加两个 scope 类型 [{ name: 'empty', value: false },{ name: 'custom', value: 'custom' }]
    allowCustomScopes: true,
    allowBreakingChanges: false,
    // 跳过问题
    skipQuestions: ['scope', 'body', 'breaking','footer'],

    // subject 限制长度
    subjectLimit: 100,
    // breaklineChar: '|', // 支持 body 和 footer
    footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true,
};