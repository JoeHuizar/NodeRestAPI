var _0x40f0=['sendMail','catch','handleError','TEST_EMAIL','This\x20is\x20a\x20Test','Emailer','defineProperty','__esModule','nodemailer','cluster','createTransport','env','MAILER_PORT','MAILER_PASS','send','from','isArray','length','join','subject','html','transporter'];(function(_0x5e6bff,_0x383fd1){var _0x3a4e12=function(_0x3c85c2){while(--_0x3c85c2){_0x5e6bff['push'](_0x5e6bff['shift']());}};_0x3a4e12(++_0x383fd1);}(_0x40f0,0xf8));var _0x17fa=function(_0x5a6dc6,_0x4db4bd){_0x5a6dc6=_0x5a6dc6-0x0;var _0x215fdb=_0x40f0[_0x5a6dc6];return _0x215fdb;};'use strict';Object[_0x17fa('0x0')](exports,_0x17fa('0x1'),{'value':!![]});const nodemailer=require(_0x17fa('0x2'));const cluster=require(_0x17fa('0x3'));class Emailer{constructor(_0x18a06c){this[_0x17fa('0x4')](_0x18a06c);}[_0x17fa('0x4')](_0x48645a){const _0x425931=_0x48645a||{'pool':!![],'host':process[_0x17fa('0x5')]['MAILER_HOST'],'port':process['env'][_0x17fa('0x6')],'secure':!![],'tls':{'rejectUnauthorized':![]},'auth':{'user':process[_0x17fa('0x5')]['MAILER_USER'],'pass':process['env'][_0x17fa('0x7')]}};this['transporter']=nodemailer[_0x17fa('0x4')](_0x425931);}[_0x17fa('0x8')](_0x5a0b05,_0x877703){const _0x179a08={'from':_0x5a0b05[_0x17fa('0x9')],'to':Array[_0x17fa('0xa')](_0x5a0b05['to'])&&_0x5a0b05['to'][_0x17fa('0xb')]>0x0?_0x5a0b05['to'][_0x17fa('0xc')](',\x20'):_0x5a0b05['to'],'subject':_0x5a0b05[_0x17fa('0xd')],'html':_0x5a0b05[_0x17fa('0xe')]};return this[_0x17fa('0xf')][_0x17fa('0x10')](_0x179a08)['then'](_0x2ebf78=>{_0x877703?_0x877703(_0x2ebf78):![];return _0x2ebf78;})[_0x17fa('0x11')](this[_0x17fa('0x12')]);}[_0x17fa('0x12')](_0x5ab60e){return _0x5ab60e;}['test'](_0x57bf7d){const _0x28035e=_0x57bf7d||{'from':process[_0x17fa('0x5')][_0x17fa('0x13')],'to':process[_0x17fa('0x5')]['TEST_EMAIL'],'subject':_0x17fa('0x14'),'html':'<div><p>This\x20is\x20a\x20Test</p></div>'};this[_0x17fa('0x8')](_0x28035e);}}exports[_0x17fa('0x15')]=Emailer;