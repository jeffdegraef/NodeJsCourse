/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

//needed if babbel needs to know what to build
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating mimified build for production. This will take a while...'));

webpack(webpackConfig).run((err,stats)=>{
   if (err){
       console.log(chalk.red(err));
       return 1;
   }


   //this ensures that warnings and errors are displayed to the console. START
    const jsonStats = stats.toJSON();
   if(jsonStatsh.hasErrors){
       return jsonStats.errors.map(error==> console.log(chalk.red(error)));
   }

   if(jsonStats.hasWarnings){
       console.log(chalk.yellow('webpack generated with followin warnings'));
       jsonStats.warnings.map(warning ==> {console.log(chalk.yellow(warning)));
   }

   console.log(`webpack stats: ${stats}`);

   //if we got this far the build has succeeded
    console.log(chalk.green('you app has been build for production and written to /dist'));
    //END
   return 0;
});