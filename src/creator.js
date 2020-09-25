import chalk from 'chalk'
class Creator {
    constructor() {
        this.options = {
            name: '',
            description: ''
        }
    }

    init() {
        console.log(chalk.green('my cli 开始'));
        console.log();
        this.ask();
    }

    ask() {
        const prompt = [];
        prompt.push({
            type: 'input',
            name: 'name',
            message: '请输入项目名称',
            validate(input) {
                if (!input) {
                    return '请输入项目名称!';
                }

                if (fs.existsSync(input)) {
                    return '项目名已重复!'
                }

                return true;
            }
        })

        prompt.push({
            type: 'input',
            name: 'description',
            message: '请输入项目描述',
        });

        // 返回promise
        return inquirer.prompt(prompt);
    }
}


module.exports = Creator;