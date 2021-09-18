<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>卡片名称</span>
				<el-button style="float: right; padding: 3px 0" type="text" @click="add">添加</el-button>
			</div>
			<div class="cardbody">
				<el-card class="box-card2"><div id="wrapper1"></div></el-card>
					<el-card class="box-card2"><div id="wrapper2"></div></el-card>
				<el-card class="box-card2"><div id="wrapper3"></div></el-card>
				<el-card class="box-card2"><div id="wrapper4"></div></el-card>
			</div>
		</el-card>
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
			indexKey:-1,
			playerList: [],
			videoList: [
				// {
				// 	name: '标清',
				// 	src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
				// },
				// {
				// 	name: '高清',
				// 	src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
				// },
				// {
				// 	name: '蓝光',
				// 	src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
				// },
				// {
				// 	name: '原画',
				// 	src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
				// }
			]
		};
	},
	mounted() {
		// this.PlayVide();
	},
	methods: {
		PlayVide() {
			let self = this;
			self.videoList.forEach((item, index) => {
				const player = new chimee({
					wrapper: document.getElementById('wrapper' + index), // video dom容器
					// src:'http://cdn.toxicjohann.com/lostStar.mp4',
					isLive: false, //是否直播
					src: item.src,
					controls: true,
					autoplay: true,
					kernels: {
						flv,
						hls
					},
					// 使用插件
					plugin: [
						{
							name: chimeePluginControlbar.name, // 或者 'chimeeControl'
							majorColor: '#FFF', //该插件中，所有的 svg 图 播放进度条，进度颜色 声音控制条，音量颜色
							hoverColor: '#55aaff', //鼠标放在svg上时的颜色,
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
									list: [
										// {
										// 	name: '标清',
										// 	src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
										// },
										// {
										// 	name: '高清',
										// 	src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
										// },
										// {
										// 	name: '原画',
										// 	src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
										// }
									]
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
				
				this.playerList.push(player)
			});
		},
		add() {
			
			if(this.playerList.length<4){
				
				this.videoList.push({
					name: '标清',
					src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
				});
				// this.$nextTick(()=>{
					let player = new chimee({
						wrapper: document.getElementById('wrapper' + this.videoList.length ), // video dom容器
						// src:'http://cdn.toxicjohann.com/lostStar.mp4',
						isLive: false, //是否直播
						src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8',
						controls: true,
						autoplay: true,
						kernels: {
							flv,
							hls
						},
						// 使用插件
						plugin: [
							{
								name: chimeePluginControlbar.name, // 或者 'chimeeControl'
								majorColor: '#FFF', //该插件中，所有的 svg 图 播放进度条，进度颜色 声音控制条，音量颜色
								hoverColor: '#55aaff', //鼠标放在svg上时的颜色,
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
										
									},
									progressBar: {
										
									},
									volume: {
										
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
										list: [
											// {
											// 	name: '标清',
											// 	src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
											// },
											// {
											// 	name: '高清',
											// 	src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
											// },
											// {
											// 	name: '原画',
											// 	src: 'http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
											// }
										]
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
					
					this.playerList.push(player)
				// })
				
				
				
			}else {
				console.log("大于等于4个啦")
				// return
				this.indexKey=-1+1
				if(this.indexKey==4){
					this.indexKey=-1
					return
				}
				console.log("this.playerList",this.playerList)
				console.log("this.indexKey",this.indexKey)
				this.playerList[this.indexKey].load('http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8');
				// this.playerList[this.indexKey].src='http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8'
			}
			
			// this.PlayVide()
		}
	}
};
</script>
<style lang="less" scoped="">
.box-card {
	margin: 0 auto;
	width: calc(100% - 300px);
	// height: calc(100% - 300px);
}
.cardbody {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	.box-card2 {
		width: calc((100% - 60px) / 2);
		// width: 45%;
		margin: 10px;
	}
}
#wrapper {
	width: 70%;
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
