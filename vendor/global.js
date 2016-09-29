var KylinConfig = {
	API_HOST: '', // api host
	API_HOST_MOCK: '', // mock api host
	HOME_DIR: '',
};

var isDev = location.origin.indexOf('http://localhost') == 0;

if (isDev) { // 本地环境
	KylinConfig.API_HOST = 'http://manage.local.kylin.com';
    KylinConfig.API_HOST_MOCK = 'http://rap.taobao.org/mockjsdata/8086';
	KylinConfig.HOME_DIR = '/';
} else { // 线上环境
	KylinConfig.API_HOST = location.origin || 'http://manage.kylin.com';
	KylinConfig.API_HOST_MOCK = KylinConfig.API_HOST;
	KylinConfig.HOME_DIR = '/fe/dist/';
}
