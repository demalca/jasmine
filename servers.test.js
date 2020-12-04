describe("Servers test", function () {
  beforeEach(function () {
    serverNameInput.value = "Alice";
  });

  it("should add no new server to allServers on submitServerInfo()", function () {
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should add a another new server to allServers on submitServerInfo()", function () {
    submitServerInfo();
    serverNameInput.value = "Roger";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(2);
  });

  afterEach(function () {
    // teardown logic
    serverTbody.innerHTML = "";
    allServers = {};
    serverId = 0;
  });
});
