<template>
  <div id="menu" ref="root">
    <svg id="blob" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path id="blob-path" d="M60,500H0V0h60c0,0,20,172,20,250S60,900,60,500z" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CheesySidebar',
  mounted () {
    const blob = this.$refs.root

    window.addEventListener('load', function () {
      console.log('load!')

      const height = window.innerHeight
      let x = 0; let y = height / 2
      let curveX = 10
      let curveY = 0
      let targetX = 0
      let xitteration = 0
      let yitteration = 0
      const menuExpanded = false

      const blobPath = blob.querySelector('#blob-path')

      window.addEventListener('mousemove', function (e) {
        x = e.pageX

        y = e.pageY
      })

      function easeOutExpo (currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue
      }

      const hoverZone = 150
      const expandAmount = 60

      function svgCurve () {
        if ((curveX > x - 1) && (curveX < x + 1)) {
          xitteration = 0
        } else {
          if (menuExpanded) {
            targetX = 0
          } else {
            xitteration = 0
            if (x > hoverZone) {
              targetX = 0
            } else {
              targetX = -(((60 + expandAmount) / 100) * (x - hoverZone))
            }
          }
          xitteration++
        }

        if ((curveY > y - 1) && (curveY < y + 1)) {
          yitteration = 0
        } else {
          yitteration = 0
          yitteration++
        }

        curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100)
        curveY = easeOutExpo(yitteration, curveY, y - curveY, 100)

        const anchorDistance = 200
        const curviness = anchorDistance - 40

        const newCurve2 = 'M60,' + height + 'H0V0h60v' + (curveY - anchorDistance) + 'c0,' + curviness + ',' + curveX + ',' + curviness + ',' + curveX + ',' + anchorDistance + 'S60,' + (curveY) + ',60,' + (curveY + (anchorDistance * 2)) + 'V' + height + 'z'

        blobPath.setAttribute('d', newCurve2)

        blob.style.width = curveX + 160 + 'px'

        window.requestAnimationFrame(svgCurve)
      }

      window.requestAnimationFrame(svgCurve)
    })
  }
}
</script>

<style lang="scss">
@import "assets/styles/common";

#menu {
  height: 100%;
  position: fixed;
  background-color: $my__color--gold;
  width: 300px;
  transition: 1000ms all cubic-bezier(0.19, 1, 0.22, 1);
  transform: translateX(-100%);
  top: 0;
  left: 58px;
}

#blob {
  top: 0;
  z-index: -1;
  right: 60px;
  transform: translateX(100%);
  height: 100%;
  position: absolute;
}

#blob-path {
  height: 100%;
  fill:  $my__color--black;
}
</style>
