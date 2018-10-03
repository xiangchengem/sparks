<template>
	<div class="container" id="">
		<main>
			<div class="world">
					<router-link to="/world">欢迎来到西部世界</router-link>
			</div>
			<div class="reflections">
				<ul>
					<li>
						<router-link to="/">
							<div>
								太鼓の太鼓のお兄さん,赤の帽子のお兄さん
								<span></span>
							</div>
						</router-link>
					</li>
					<li></li>
					<li>
						<router-link to="/">
							<div>
								龙を目覚めよう,太鼓の音で
								<span></span>
							</div>
						</router-link>

					</li>
				</ul>
			</div>
			<div class="movies">
				<video autoplay preload muted loop>
					<source src="../public/video/main-pc.mp4" type="video/mp4">
				</video>
			</div>
			<div class="time">
				<ul>
					<li>{{ctime | dateformat('YY.MM.DD dddd HH:mm ss')}}</li>
					<li>{{city}} , 中国</li>
					<li>{{wendu}}℃ / {{fengxiang}} / {{type}}</li>
				</ul>
			</div>
		</main>
	</div>
</template>

<script>
export default {
  data: () => ({
    city: "",
    wendu: "",
    type: "",
    fengxiang: "",
    ctime: new Date(),
    list: []
  }),
  created() {
    this.getinfo();
  },
  mounted: function() {
    var that = this; //声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(function() {
      that.ctime = new Date(); //修改数据ctime
    }, 1000);
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer); //在Vue实例销毁前，清除定时器
    }
  },
  methods: {
    getinfo() {
      this.$http
        .get("http://wthrcdn.etouch.cn/weather_mini?citykey=101250101")
        .then(data => {
          this.list = data.body.data.forecast;
          this.city = data.body.data.city;
          this.type = this.list[0].type;
          this.fengxiang = this.list[0].fengxiang;
          this.wendu = data.body.data.wendu;
          console.log(data.body.data);
        });
    }
  },
  filters: {
    dateFormat(dateStr, pattern ="") {
      return moment(ctime).format(pattern);
    }
  }
};
</script>

<style scoped>
.container {
  overflow: hidden;
  background: #000;
}
.movies {
  width: 100vw;
  height: 100vh;
  opacity: 1;
  /* z-index: 999; */
}
video {
  width: 100%;
}
source {
  height: 100%;
}
/* 小圆点背景图 */
.movies:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALElEQVQoU2NkYGD4zwABjFAahQIJElSATSNcDKuxyDqwKUCxkiwFGL7A60gAq6oECddjbgcAAAAASUVORK5CYII);
  background-size: 4px;
  z-index: 1;
  opacity: 0.1;
}
.reflections {
  position: absolute;
  top: 35%;
  right: 90px;
}
.reflections li:nth-of-type(even) {
  margin: 20px 0;
  height: 0.5px;
  background-color: rgba(255, 255, 255, 0.918);
}
.time ul,
.reflections div {
  font-family: "simsun";
	color: rgba(255, 255, 255, 0.918);
	z-index: 1;
}
.time ul {
	z-index: 1;
  position: absolute;
  bottom: 13%;
	left: 88px;
	font-size: 14px;
}
.world{
	position: absolute;
	top:20%;
	right: 80px;
	z-index: 2;
}
</style>