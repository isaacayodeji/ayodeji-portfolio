 <!-- <Row
        gutter={{
          xs: 0,
          xl: 16,
        }}
        className="mt-36"
      >
        {projects.map((project, index) => (
          <Col
            key={index}
            xs={24}
            md={12}
            lg={8}
            className="mb-10"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <Card
              hoverable
              // style={{ width: 350 }}
              cover={<img alt="example" src={project.img} />}
              actions={[
                <button
                  onClick={() =>
                    (window.location.href = project.livePreviewUrl)
                  }
                  className="flex items-center gap-1 ml-2"
                >
                  <img src={chain} alt="" />
                  Live preview
                </button>,
                <button
                  onClick={() => (window.location.href = project.viewCodeUrl)}
                  className="flex items-center gap-1 ml-2"
                >
                  <img src={github} alt="" />
                  View code
                </button>,
              ]}
            >
              <Meta title={project.title} description={project.description} />
              <Meta description={project.techStack} />
            </Card>
          </Col>
        ))}
      </Row> -->