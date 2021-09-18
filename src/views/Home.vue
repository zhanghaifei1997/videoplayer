<template>
	<div>
		<el-card class="box-card"><div id="wrapper"></div></el-card>
	</div>
</template>

<script>
import chimee from 'chimee';
import flv from 'chimee-kernel-flv';
import hls from 'chimee-kernel-hls';
import chimeePluginControlbar from 'chimee-plugin-controlbar';
import chimeePluginDanmu from 'chimee-plugin-danmu';
// import Barrages from '../libs/danmu';
chimee.install(chimeePluginControlbar);
chimee.install(chimeePluginDanmu);
export default {
	name: 'Home',
	components: {},
	data() {
		return {
			player: null
		};
	},
	mounted() {
		let self = this;
		/* 
		动态加载视频
			// 通过 src 更改调整视频源
			chimee.src = 'http://cdn.toxicjohann.com/lostStar.mp4';
			// 通过 load 方法更改视频源
			chimee.load('http://cdn.toxicjohann.com/lostStar.mp4');
			
			load.src='' //视频地址
			load.option={
				isLive:false,
				box:'native/flv/hls',
				kernels:{
					flv/hls
				},
			} //视频地址
			
			// 三秒后进行视频切换
			setTimeout(() => {
			  chimee.load({
			    src: 'http://yunxianchang.live.ujne7.com/vod-system-bj/TL1ce1196bce348070bfeef2116efbdea6.flv',
			      box: 'flv',
			      kernels: {
			      flv: {
			          handler: ChimeeKernelFlv,
			          stashSize: 1000 * 1000 * 1024,
			      },
			    },
			  });
			}, 3000);
		
		play 播放视频的函数。
		pause 暂停视频的函数。
		seek 设置播放时间位置		
			...
			chimee.play(); // 播放
			chimee.pause(); // 暂停
			chimee.seek(20); // 跳转到第 20 秒
			...
		
		
		startLoad 开始视频源的加载（现在只有 hls 和 native 模式支持）
		stopLoad 暂停视频源的加载
		requestPictureInPicture  画中画
		exitPictureInPicture 退出画中画模式
		
		
		container元素相关属性{现在提供四个 css 样式，分别为 width, height, display, block.}
		// chimee.container.width = '90%';
		
		
		*/
		
		
		
		this.player = new chimee({
			wrapper: document.getElementById('wrapper'), // video dom容器
			// src:'http://cdn.toxicjohann.com/lostStar.mp4',
			isLive: true, //是否直播
			src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8',
			controls: true,//是否展示控制条
			autoplay: true,//是否自动播放
			//box:'flv/native/hls'//视频编码
			// width:'',
			// height:'',
			//crossOrigin:true,//是否跨域
			//loop:false,//是否循环
			//muted:false,//是否静音
			//preload:'auto',//是否预加载
			//poster:'',//封面
			kernels: {
				flv,
				hls
			},//播放器核心解码器
			// 使用插件
			plugin: [
				{
					name: chimeePluginControlbar.name, // 或者 'chimeeControl'
					majorColor: '#FFF', //该插件中，所有的 svg 图 播放进度条，进度颜色 声音控制条，音量颜色
					hoverColor: '#9d9d4c', //鼠标放在svg上时的颜色,
					children: {
						play: {
							// 配置播放暂停键 icon 及事件
							bitmap: false,
							icon: {
								play: '',
								pause: ''
							}
						},
						progressTime: {
							//时间展示组件
						},
						progressBar: {
							//进度条控制组件
						},
						volume: {
							//   bitmap: false,
							//   icon: {
							//     play: "",
							//     pause: "",
							//   },
							layout: 'vertical'
						},
						playbackrate: {
							//切换播放倍速组件
							list: [
								{ name: '0.5倍速', value: 0.5 },
								{ name: '0.75倍速', value: 0.75 },

								{ name: '1倍速', value: 1, default: true },
								{ name: '1.25倍速', value: 1.25 },
								{ name: '1.5倍速', value: 1.5 },
								{ name: '2倍速', value: 2 }
							]
						},
						clarity: {
							//切换清晰度组件
							// list: [
							// 	{
							// 		name: '标清',
							// 		src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
							// 	},
							// 	{
							// 		name: '高清',
							// 		src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
							// 	},
							// 	{
							// 		name: '原画',
							// 		src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
							// 	}
							// ]
						},
						screen: {
							//配置全屏／非全屏 icon 及事件
							icon: {
								full: '',
								small: ''
							}
						}
					}
				},
				// 'Barrages'
				{
					name: chimeePluginDanmu.name,
					mode: 'css',
					lineHeight: '60',
					fontSize: '24',
					updateByVideo: true,
					event: {
						receiveData() {
							console.log('000');
						}
					}
				}
			]
		});
	}
};
</script>
<style lang="less" scoped="">
	#wrapper{
		width:70%;
		margin: 0 auto;
	
	}
.container {
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
}
video {
	width: 100%;
	height: 100%;
	display: block;
	background-color: #000;
}
video:focus,
video:active {
	outline: none;
}
// .chimee-flex-component svg {
// 	/* background-image: url('../assets/btn_play_5g.png'); */
// 	background-color: brown;
// }
// vue-baberrage {
// 	height: 40px;
// 	widows: auto;
// }
// .barrages-drop {
// 	.baberrage-lane {
// 		.blue .normal {
// 			border-radius: 100px;
// 			background: #e6ff75;
// 			color: #fff;
// 		}
// 		.green .normal {
// 			border-radius: 100px;
// 			background: #75ffcd;
// 			color: #fff;
// 		}
// 		.red .normal {
// 			border-radius: 100px;
// 			background: #e68fba;
// 			color: #fff;
// 		}
// 		.yellow .normal {
// 			border-radius: 100px;
// 			background: #dfc795;
// 			color: #fff;
// 		}
// 		.baberrage-stage {
// 			position: absolute;
// 			width: 100%;
// 			height: 212px;
// 			overflow: hidden;
// 			top: 0;
// 			margin-top: 130px;
// 		}
// 	}
// }
</style>
